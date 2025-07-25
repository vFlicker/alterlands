import styled from '@emotion/styled';
import { JSX, PropsWithChildren, useEffect, useRef } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { withAttrs } from '../../withAttrs';
import { ReactPortal } from './ReactPortal';

type ModalProps = PropsWithChildren<{
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}>;

const enum EscKeyEvent {
  Escape = 'Escape',
  Esc = 'Esc',
}

function Modal({
  className,
  children,
  isOpen,
  onClose,
}: ModalProps): JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscapeKey = (evt: KeyboardEvent) => {
      if (evt.key === EscKeyEvent.Escape || evt.key === EscKeyEvent.Esc) {
        onClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === modalRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <ReactPortal>
      <StyledModel ref={modalRef} onClick={handleBackdropClick}>
        <StyledModelInner className={className}>
          <StyledCloseButton onClick={onClose}>
            <Icon name="icon-minimize" />
          </StyledCloseButton>
          {children}
        </StyledModelInner>
      </StyledModel>
    </ReactPortal>
  );
}

export { Modal };

const StyledModel = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);

  z-index: 10;
  overflow: hidden;
`;

const StyledModelInner = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  max-width: 520px;
  max-height: 90%;
  padding: 32px 24px 24px 24px;
  border-radius: ${Radius.RADIUS_16};

  background-color: ${Color.DARK};

  overflow-y: auto;
`;

const StyledCloseButton = withAttrs(
  {
    size: 'small',
    color: 'transparent',
    variant: 'filled',
  },
  styled(IconButton)`
    position: absolute;
    top: 36px;
    right: 28px;
    z-index: 9;

    svg {
      stroke: ${Color.WHITE_42};
    }

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);
