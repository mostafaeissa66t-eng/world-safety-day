import React from "react";

function ContentRenderer({ content }) {
  if (!content) return null;

  // Split the entire text block into an array of lines
  const lines = content.split("\n");

  const elements = [];
  let listItems = [];

  lines.forEach((line, index) => {
    // Check if the line starts with a hyphen and a space
    if (line.trim().startsWith("- ")) {
      // If it's a list item, add it to our temporary list
      listItems.push(line.trim().substring(2));
    } else {
      // If the current line is NOT a list item, first check if we have a list to render
      if (listItems.length > 0) {
        elements.push(
          <ul
            key={`ul-${index}`}
            className="list-disc list-inside space-y-2 my-4 pl-4"
          >
            {listItems.map((item, liIndex) => (
              <li key={liIndex}>{item}</li>
            ))}
          </ul>,
        );
        listItems = []; // Reset the list
      }
      // Then, add the current line as a paragraph
      if (line.trim() !== "") {
        elements.push(
          <p key={`p-${index}`} className="mb-4">
            {line}
          </p>,
        );
      }
    }
  });

  // After the loop, check if there's any remaining list to be rendered
  if (listItems.length > 0) {
    elements.push(
      <ul key="ul-last" className="list-disc list-inside space-y-2 my-4 pl-4">
        {listItems.map((item, liIndex) => (
          <li key={liIndex}>{item}</li>
        ))}
      </ul>,
    );
  }

  return <div>{elements}</div>;
}

export default ContentRenderer;
