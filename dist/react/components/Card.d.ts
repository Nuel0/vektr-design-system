import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'base' | 'raised' | 'sunken' | 'inverse';
}
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map