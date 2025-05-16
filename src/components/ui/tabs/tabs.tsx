// components/Tabs.tsx
"use client";

import * as React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

const Tabs = RadixTabs.Root;

const TabsList: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <RadixTabs.List className="flex space-x-2">
        {children}
    </RadixTabs.List>
);

const TabsTrigger: React.FC<React.ComponentProps<typeof RadixTabs.Trigger>> = ({
    className = "",
    children,
    ...props
}) => (
    <RadixTabs.Trigger
        className={`
            px-4 py-2 text-sm font-medium text-gray-600 hover:text-sky-900 hover:bg-secondary
            data-[state=active]:text-sky-900 data-[state=active]:bg-secondary
            rounded-md focus:outline-none transition-colors
            ${className}
        `}
        {...props}
    >
        {children}
    </RadixTabs.Trigger>
);

const TabsContent: React.FC<React.ComponentProps<typeof RadixTabs.Content>> = ({
    className = "",
    children,
    ...props
}) => (
    <RadixTabs.Content className={`p-4 ${className}`} {...props}>
        {children}
    </RadixTabs.Content>
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
