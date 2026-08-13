import React from 'react';
import { clsx } from 'clsx';

export const Pagination = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} aria-label="pagination" className={clsx('vektr-pagination', className)} {...props} />
  )
);
Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={clsx('vektr-pagination-content', className)} {...props} />
  )
);
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={clsx('vektr-pagination-item', className)} {...props} />
  )
);
PaginationItem.displayName = 'PaginationItem';

export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? 'page' : undefined}
      data-active={isActive ? 'true' : undefined}
      className={clsx('vektr-pagination-link', className)}
      {...props}
    />
  )
);
PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children = '‹ Previous', ...props }, ref) => (
    <PaginationLink ref={ref} className={clsx('vektr-pagination-prev', className)} {...props}>
      {children}
    </PaginationLink>
  )
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children = 'Next ›', ...props }, ref) => (
    <PaginationLink ref={ref} className={clsx('vektr-pagination-next', className)} {...props}>
      {children}
    </PaginationLink>
  )
);
PaginationNext.displayName = 'PaginationNext';
