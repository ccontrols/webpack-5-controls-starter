import React, { FC } from 'react';

type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'disabled'
  | 'success'
  | 'warning'
  | 'error';

const variant_colors: Record<ButtonVariant, string> = {
  primary: '#F2F2F2',
  accent: '#F2F2F2',
  disabled: '#828282',
  success: '#F2F2F2',
  warning: '#4F4F4F',
  error: '#F2F2F2',
};

const variant_backgrounds: Record<ButtonVariant, string> = {
  primary: '#2F80ED',
  accent: '#9B51E0',
  disabled: '#E0E0E0',
  success: '#219653',
  warning: '#F2C94C',
  error: '#EB5757',
};

export interface VariantButtonProps {
  /**
   *  button label text
   */
  text: string;

  /**
   *  variant kind
   */
  variant?: ButtonVariant;
}

/**
 * Button with variants
 */
export const VariantButton: FC<VariantButtonProps> = ({
  text,
  variant = 'primary',
}) => {
  return (
    <button
      disabled={variant === 'disabled' ? true : undefined}
      style={{
        color: variant_colors[variant],
        backgroundColor: variant_backgrounds[variant],
        borderRadius: 8,
        border: `1px solid #000000`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div data-testid="label" style={{ padding: '5px 10px' }}>
        {text}
      </div>
    </button>
  );
};
