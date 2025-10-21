import React from "react";

export function Card({ title, children, footer, className = "" }) {
  return (
    <divclassName>
      {title && (
        <h3 className="font-heading text-h3 mb-sm border-b border-secondary/20 pb-xs">
          {title}
        </h3>
      )}
      <div className="text-body font-body mb-sm">{children}</div>
      {footer && <div className="mt-sm text-small text-highlight">{footer}</div>}
    </divclassName>
  );
}

