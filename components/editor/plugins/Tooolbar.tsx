"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";

import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatParagraph } from "./utils";
const LowPriority = 1;

function Divider() {
  return <div className="divider" />;
}

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, $updateToolbar]);

  return (
    <div className="toolbar" ref={toolbarRef}>
      <button
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        className="toolbar-item spaced"
        aria-label="Undo"
        type="button"
      >
        <i className="format undo" />
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        className="toolbar-item"
        aria-label="Redo"
        type="button"
      >
        <i className="format redo" />
      </button>
      <Divider />
      <button
        onClick={() => formatParagraph(editor)}
        data-active={activeBlock === "h1" ? "" : undefined}
        className={
          "toolbar-item spaced " + (activeBlock === "h1" ? "active" : "")
        }
        type="button"
      >
        <i className="format h1" />
      </button>
      <button
        onClick={() => editor.update(() => toggleBlock("h1"))}
        data-active={activeBlock === "h1" ? "" : undefined}
        className={
          "toolbar-item spaced " + (activeBlock === "h1" ? "active" : "")
        }
        type="button"
      >
        <i className="format h1" />
      </button>
      <button
        onClick={() => editor.update(() => toggleBlock("h2"))}
        data-active={activeBlock === "h2" ? "" : undefined}
        className={
          "toolbar-item spaced " + (activeBlock === "h2" ? "active" : "")
        }
        type="button"
      >
        <i className="format h2" />
      </button>
      <button
        onClick={() => editor.update(() => toggleBlock("h3"))}
        data-active={activeBlock === "h3" ? "" : undefined}
        className={
          "toolbar-item spaced " + (activeBlock === "h3" ? "active" : "")
        }
        type="button"
      >
        <i className="format h3" />
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        className={"toolbar-item spaced " + (isBold ? "active" : "")}
        aria-label="Format Bold"
        type="button"
      >
        <i className="format bold" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        className={"toolbar-item spaced " + (isItalic ? "active" : "")}
        aria-label="Format Italics"
        type="button"
      >
        <i className="format italic" />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
        className={"toolbar-item spaced " + (isUnderline ? "active" : "")}
        aria-label="Format Underline"
        type="button"
      >
        <i className="format underline" />
      </button>
    </div>
  );
}
