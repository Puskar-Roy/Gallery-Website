export interface NavbarItems {
  href: string;
  tags: string;
  onClick?: () => void;
}

export interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export interface Users {
  email: string;
  image: string;
  name: string;
}
