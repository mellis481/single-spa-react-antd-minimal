import { type PropsWithChildren } from "react";

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <div className="vtx-ui-mf-my-info__root">
      <div className="vtx-ui-mf-my-info__content">
        <section>{props.name} is mounted!</section>
        {props.children}
      </div>
    </div>
  );
}
