import { Omit, IsAny, CoerceEmptyInterface } from '@material-ui/types';
import {
  CreateCSSProperties,
  StyledComponentProps,
  WithStylesOptions,
} from '@material-ui/styles/withStyles';
import { Theme as DefaultTheme } from './createMuiTheme';
import * as React from 'react';

// These definitions are almost identical to the ones in @material-ui/styles/styled
// Only difference is that ComponentCreator has a default theme type
// If you need to change these types, update the ones in @material-ui/styles as well

/**
 * @internal
 */
export type ComponentCreator<Component extends React.ElementType> = <
  Theme = DefaultTheme,
  Props extends {} = any
>(
  styles:
    | CreateCSSProperties<Props>
    | (({ theme, ...props }: { theme: Theme } & Props) => CreateCSSProperties<Props>),
  options?: WithStylesOptions<Theme>,
) => React.ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>,
    'classes' | 'className'
  > &
    StyledComponentProps<'root'> & { className?: string } & CoerceEmptyInterface<Props>
>;

export interface StyledProps {
  className: string;
}

export default function styled<Component extends React.ElementType>(
  Component: Component,
): ComponentCreator<Component>;
