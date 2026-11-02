"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { libraries, type Library } from "@/data/libraries";
import useLocalStorage from "@/hooks/useSelectedLibrary";
import { buildRedirectUrl, cn } from "@/lib/utils";

export function LibrarySelect() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [storedValue, setStoredValue] = useLocalStorage<string>(
    "selectedLibrary",
    "",
  );

  const selectedLibrary = libraries.find((lib) => lib.value === storedValue);

  const visibleLibraries = libraries
    .filter((lib) => lib.label.toLowerCase().includes(input.toLowerCase()))
    .sort((a, b) => a.label.localeCompare(b.label));

  const handleSelectValue = (lib: Library) => {
    setStoredValue(lib.value);
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!selectedLibrary) return;

    const searchParams = new URLSearchParams(window.location.search);
    const originalPath = searchParams.get("from") || "/";

    window.location.href = buildRedirectUrl({
      originalPath,
      libraryDomain: selectedLibrary.domain,
      customPath: selectedLibrary.customPath,
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* The anchor is the whole row, not the trigger, so the list below spans
          the combobox and the OK button together. PopoverContent reads its width
          from --radix-popover-trigger-width, which measures this element. */}
      <PopoverAnchor asChild>
        <div className="mx-auto flex w-full max-w-lg min-w-0 gap-2">
          <PopoverTrigger asChild aria-label="Vælg kommune">
            <Button
              variant="outline"
              size="xl"
              role="combobox"
              className="w-full min-w-0 flex-1 appearance-none justify-between overflow-hidden rounded-lg bg-none text-base md:text-lg"
              aria-expanded={open}
            >
              <span className="text-foreground/70 text-typo-body-sm min-w-0 truncate">
                {selectedLibrary ? selectedLibrary.label : "Vælg dit bibliotek"}
              </span>
              <ChevronsUpDown className="ml-2 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <Button
            size="xl"
            className="text-typo-body-lg shrink-0 rounded-lg px-5 !font-bold !text-white sm:px-6"
            onClick={handleSubmit}
          >
            OK
          </Button>
        </div>
      </PopoverAnchor>
      <PopoverContent
        className="mt-2 max-h-(--radix-popover-content-available-height) w-(--radix-popover-trigger-width) p-0"
        align="start"
        side="bottom"
      >
        <Command className="w-full">
          <CommandInput
            placeholder="Søg efter dit bibliotek"
            className="text-typo-body-sm h-9 w-full"
            value={input}
            onValueChange={setInput}
          />
          <CommandList>
            <CommandEmpty>Ingen resultater</CommandEmpty>
            <CommandGroup>
              {visibleLibraries.map((lib) => (
                <CommandItem
                  key={lib.value}
                  value={lib.label}
                  onSelect={() => handleSelectValue(lib)}
                  // Not data-selected: cmdk owns that attribute for its cursor.
                  // data-chosen marks the library saved in localStorage.
                  data-chosen={storedValue === lib.value ? "true" : undefined}
                  className="flex items-center justify-between gap-3"
                >
                  {lib.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      storedValue === lib.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
