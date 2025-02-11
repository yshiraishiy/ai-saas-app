import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between space-y-2">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight">
          {title}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
