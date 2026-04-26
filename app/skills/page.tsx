import { permanentRedirect } from "next/navigation";

export default function SkillsRedirect(): never {
  permanentRedirect("/tech-stack");
}
