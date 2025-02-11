import { tools, ToolType } from "@/config/tools";
import { notFound } from "next/navigation";
import React from "react";

const ToolPage = async ({ params }: { params: Promise<{ tool: string }> }) => {
  const toolType = (await params).tool as ToolType;
  const tool = tools[toolType];

  if (!tool) {
    notFound();
  }

  return <div>{tool.title}</div>;
};

export default ToolPage;
