"use client";
import { Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TOC() {
  const pathname = usePathname();
  return (
    <Nav variant="pills" className="flex-column" activeKey={pathname}>
      <Nav.Item>
        <Nav.Link as={Link} href="/labs/lab1" eventKey="/labs/lab1">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/labs/lab2" eventKey="/labs/lab2">Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/labs/lab3" eventKey="/labs/lab3">Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/kambaz" eventKey="/kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/jannunzi">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
