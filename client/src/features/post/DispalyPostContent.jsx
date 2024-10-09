import CharacterCount from "@tiptap/extension-character-count";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

function DisplayPostContent({ post }) {
  console.log(post);
  const defaultContent = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 1 },
        content: [{ type: "text", text: "Default Heading" }],
      },
      {
        type: "paragraph",
        content: [{ type: "text", text: "Default paragraph text." }],
      },
    ],
  };

  const editor = useEditor({
    extensions: [StarterKit, CharacterCount.configure()],
    editable: false,
    content: post || defaultContent,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base max-w-none m-5 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor && post) {
      editor.commands.setContent(post, false);
    }
  }, [post, editor]);

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}

export default DisplayPostContent;
