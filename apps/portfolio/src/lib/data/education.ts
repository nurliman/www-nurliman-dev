import dedent from "dedent";

export type Education = {
  period: string;
  school: string;
  field: string;
  description: string;
};

export const education: Education[] = [
  {
    period: "2014 - 2017",
    school: "SMK Negeri 5 Bandung",
    field: "Computer Networking",
    description: dedent`
      Learn how to design and build computer and communication networks.
      Some topics covered include:
        Operating systems,
        Database administration,
        Networking, Security,
        Routing and cabling.
    `,
  },
] as const;
