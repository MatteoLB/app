import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';

import en from './en';
import fr from './fr';

const translations = { fr, en };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations),
) || { languageTag: 'fr' };

I18n.locale = languageTag;
I18n.fallbacks = true;
I18n.translations = translations;

export default I18n;