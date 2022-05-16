import React from "react";
import clsx from "clsx";
import omit from "object.omit";
import styles from "./Typer.module.scss";

type RelevantTags = Exclude<
  keyof JSX.IntrinsicElements,
  | "script"
  | "object"
  | "style"
  | "head"
  | "animate"
  | "animateMotion"
  | "animateTransform"
  | "feDistantLight"
  | "feFuncA"
  | "feFuncB"
  | "feFuncG"
  | "feFuncR"
  | "feMergeNode"
  | "fePointLight"
  | "feSpotLight"
  | "metadata"
  | "view"
>;

type IProps<Tag extends RelevantTags> = {
  as?: Tag;
  heading?: string;
  dataText: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  cursorColor?: string;
  cursorClassName?: string;
  headingClassName?: string;
  textClassName?: string;
} & React.ComponentProps<Tag>;

type IState = {
  text: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
};

class Typer<Tag extends RelevantTags = "div"> extends React.Component<IProps<Tag>, IState> {
  static defaultProps = {
    as: "div",
    typingSpeed: 150,
    deletingSpeed: 30,
    cursorColor: "rgb(4, 180, 224)",
  };

  constructor(props: IProps<Tag>) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: props.typingSpeed,
    };
  }

  typingTimeout: NodeJS.Timeout;

  componentDidMount() {
    this.handleType();
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimeout);
  }

  handleType = () => {
    const { dataText, deletingSpeed } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? deletingSpeed : this.props.typingSpeed,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    this.typingTimeout = setTimeout(this.handleType, typingSpeed);
  };

  render() {
    const {
      as,
      heading,
      headingClassName,
      cursorColor,
      cursorClassName,
      textClassName,
      ...restProps
    } = omit(this.props, ["dataText", "typingSpeed", "deletingSpeed"]);

    return React.createElement(
      as,
      restProps,
      <>
        {heading && <span className={headingClassName}>{heading}&nbsp;</span>}
        <span className={textClassName}>{this.state.text}</span>
        <span
          className={clsx(styles.cursor, cursorClassName)}
          style={{ borderColor: cursorColor }}
        />
      </>,
    );
  }
}

export default Typer;
