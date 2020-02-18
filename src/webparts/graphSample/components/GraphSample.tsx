import * as React from "react";
import styles from "./GraphSample.module.scss";
import {IGraphSampleProps} from "./IGraphSampleProps";
import {escape} from "@microsoft/sp-lodash-subset";

import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/items/list";
import {Web, IWeb} from "@pnp/sp/webs";
import {IList} from "@pnp/sp/lists";
import {IItem} from "@pnp/sp/items";

export default class GraphSample extends React.Component<IGraphSampleProps, {}> {
  public render(): React.ReactElement<IGraphSampleProps> {
    return (
      <div className={styles.graphSample}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public async componentDidMount(): Promise<void> {
    // import { Web } from "@pnp/sp/presets/all";
    // const web1 = await sp.web.select("Title", "Description").get();
    // console.log(web1);

    const oWeb: IWeb = Web("https://contoso.sharepoint.com/sites/SPFx");
    const web2 = await oWeb.select("Title", "Description").get();
    console.log(web2);

    const list: IList = await oWeb.lists.getByTitle("ドキュメント").select("Id", "Title").get();
    console.log(list);

    const items: IItem[] = await oWeb.lists.getByTitle("ドキュメント").items.select("Id", "Title", "Created").get();
    console.log(items);
  }
}
