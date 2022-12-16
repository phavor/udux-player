import { IconProps } from "./types"

export const SearchIcon: React.FC<IconProps> = ({ width, height, fill }) => (
  <svg
    width={width || "18"}
    height={height || "18"}
    viewBox={`0 0 ${width || "18"} ${height || "18"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.41922 0C2.87465 0 0 2.87465 0 6.41922C0 9.9638 2.87465 12.8384 6.41922 12.8384C9.9638 12.8384 12.8384 9.9638 12.8384 6.41922C12.8384 2.87465 9.9638 0 6.41922 0ZM6.41922 11.6713C3.52357 11.6713 1.16713 9.31488 1.16713 6.41922C1.16713 3.52357 3.52357 1.16713 6.41922 1.16713C9.31488 1.16713 11.6713 3.52357 11.6713 6.41922C11.6713 9.31488 9.31488 11.6713 6.41922 11.6713ZM11.6713 13.422L13.422 11.6713L18 15.2727L15.2727 18L11.6713 13.422Z"
      fill={fill || "#D9D9D9"}
    />
    <path
      d="M11.6712 12.2554C11.9935 12.2554 12.2548 11.9941 12.2548 11.6718C12.2548 11.3495 11.9935 11.0883 11.6712 11.0883C11.3489 11.0883 11.0876 11.3495 11.0876 11.6718C11.0876 11.9941 11.3489 12.2554 11.6712 12.2554Z"
      fill={fill || "#D9D9D9"}
    />
  </svg>
)
