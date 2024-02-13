import React from "react";
import { useSelector } from "react-redux";

function extractCodeFromString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({ content, role }) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useSelector(state => state.auth);
  return role == "Assistant" ? (
    <div className="d-flex p-2 bg-light" style={{ borderRadius: "0.25rem", marginTop: "1rem" }}>
      <div className="d-flex align-items-center">
        <img src="openai.png" alt="openai" width={"30px"} />
      </div>
      <div>
        {!messageBlocks && (
          <p style={{ fontSize: "20px" }}>{content}</p>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <pre key={index} className="mb-0">
                <code>{block}</code>
              </pre>
            ) : (
              <p key={index} style={{ fontSize: "20px" }}>{block}</p>
            )
          )}
      </div>
    </div>
  ) : (
    <div className="d-flex p-2 bg-dark" style={{ borderRadius: "0.25rem" }}>
      <div className="d-flex align-items-center" style={{ backgroundColor: "black", color: "white" }}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </div>
      <div>
        {!messageBlocks && (
          <p style={{ fontSize: "20px" }}>{content}</p>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <pre key={index} className="mb-0">
                <code>{block}</code>
              </pre>
            ) : (
              <p key={index} style={{ fontSize: "20px" }}>{block}</p>
            )
          )}
      </div>
    </div>
  );
};

export default ChatItem;
