"use client";
import React from "react";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { editorTheme } from "./plugins/Theme";
import Toolbar from "./plugins/Tooolbar";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes } from "@lexical/html";
import { SetInitialValuePlugin } from "./plugins/SetInitialValuePlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

const initialConfig = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode],
  onError: (error: Error) => {
    console.error(error);
    throw error;
  },
};

interface EditorProps {
  initHtml: string;
  onChange: (htmlString: string | null) => void;
}

function Editor({ initHtml, onChange }: EditorProps) {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <Toolbar />
        <SetInitialValuePlugin initHtml={initHtml} />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={
              <div className="editor-placeholder">Enter some text...</div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <OnChangePlugin
            onChange={(editorState, editor) => {
              editor.update(() => {
                const htmlString = $generateHtmlFromNodes(editor, null);
                onChange(htmlString);
              });
            }}
          />
          <ListPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}

export default Editor;
