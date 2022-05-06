type Props = {
  height: number;
};

export default function Space(props: Props) {
  return <div style={{ paddingBottom: props.height || 10 }} />;
}
