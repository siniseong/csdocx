import { I18nProviderProps } from "fumadocs-ui/i18n";

type Translations = Omit<I18nProviderProps, "children">;
export const i18n: Translations = {
  locale: "ko",
  translations: {
    toc: "On This Page",
    search: "검색",
    lastUpdate: "마지막 업데이트",
    searchNoResult: "검색 결과가 없습니다.",
    previousPage: "Previous",
    nextPage: "Next",
  },
};

export default i18n;
