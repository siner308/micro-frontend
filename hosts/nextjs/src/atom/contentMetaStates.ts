import { selector } from "recoil";
import { ContentMeta } from "@/mfe/mfeCore";

export const contentMetaStates = selector({
  key: "contentMetaStates",
  get: async ({ get }): Promise<ContentMeta[]> => {
    return fetch("http://localhost:3000/deployment/production")
      .then((res) => res.json())
      .then((data) => {
        return data.map((deployment: any) => {
          const { version } = deployment;
          const { application } = version;
          return { url: version.url, module: `./${version.module}`, scope: application.name };
        });
      })
      .catch(() => []);
  }
});
