import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Agify, CatFacts } from '../panels';
import { DEFAULT_VIEW_PANELS } from './routing/routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.CATS } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <CatFacts id="cats" />
          <Agify id="agify" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
