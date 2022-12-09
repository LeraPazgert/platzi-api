import { ComponentProps, Context, FC, PropsWithChildren } from 'react';

interface MultiContextProviderItem<TValue = any> {
  context: Context<TValue>;
  value: TValue;
}

export const combineContext = (
  ...components: MultiContextProviderItem[]
): FC<PropsWithChildren> => {
  return components.reverse().reduce(
    (AccumulatedComponents, CurrentComponent, idx) => {
      return ({ children }: ComponentProps<FC<PropsWithChildren>>): JSX.Element => {
        return (
          <CurrentComponent.context.Provider key={idx} value={CurrentComponent.value}>
            <AccumulatedComponents>{children}</AccumulatedComponents>
          </CurrentComponent.context.Provider>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};
