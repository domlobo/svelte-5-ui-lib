import Toolbar from './Toolbar.svelte';
import ToolbarButton from './ToolbarButton.svelte';
import ToolbarGroup from './ToolbarGroup.svelte';
import { type Snippet } from 'svelte';
import { toolbar, toolbarGroup, toolbarButton } from './theme';
import { type VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'svelte/elements';

type ToolbarColor = VariantProps<typeof toolbar>['color'];
interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  end?: Snippet;
  embedded?: boolean;
  color?: ToolbarColor;
  separatorClass?: string;
}

type SpacingType = VariantProps<typeof toolbarGroup>['spacing'];
type PaddingType = VariantProps<typeof toolbarGroup>['padding'];
type PositionType = VariantProps<typeof toolbarGroup>['position'];
interface ToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string | undefined | null;
  divClass?: string | undefined | null;
  spacing?: SpacingType;
  padding?: PaddingType;
  position?: PositionType;
}

type ToolbarButtonType = VariantProps<typeof toolbarButton>['color'];
interface ToolbarButtonProps {
  children: Snippet;
  color?: ToolbarButtonType;
  name?: string | undefined | null;
  ariaLabel?: string | undefined | null;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  href?: string | undefined | null;
  class?: string | undefined | null;
  onclick?: () => void;
}

export { Toolbar, toolbar, ToolbarButton, toolbarButton, ToolbarGroup, toolbarGroup, type ToolbarProps, type ToolbarGroupProps, type ToolbarButtonProps };
