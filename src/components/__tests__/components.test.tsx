import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Button } from '../Button';
import { Input } from '../Input';
import { Badge } from '../Badge';
import { Card, CardHeader, CardTitle, CardBody } from '../Card';
import { Alert, AlertTitle, AlertDescription } from '../Alert';
import { Checkbox } from '../Checkbox';
import { Switch } from '../Switch';

describe('Vektr Component Unit & Accessibility Tests', () => {
  it('Button renders without accessibility violations', async () => {
    const { container } = render(<Button variant="primary">Click Me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Button handles loading state and aria-busy correctly', () => {
    const { getByRole } = render(<Button isLoading>Submit</Button>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('data-loading', 'true');
    expect(button).toBeDisabled();
  });

  it('Input links label and helper text via id and aria-describedby', async () => {
    const { getByLabelText, getByText, container } = render(
      <Input label="Email Address" helperText="We will never share your email." errorText="Invalid email format" />
    );
    const input = getByLabelText('Email Address');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(getByText('Invalid email format')).toHaveAttribute('role', 'alert');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Badge renders variants without accessibility violations', async () => {
    const { container } = render(<Badge variant="success">Active</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Card renders header, title, and body', async () => {
    const { getByText, container } = render(
      <Card variant="base">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardBody>Card Body Content</CardBody>
      </Card>
    );
    expect(getByText('Card Title')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Alert renders role="alert" and passes accessibility', async () => {
    const { getByRole, container } = render(
      <Alert variant="warning">
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>Proceed with caution.</AlertDescription>
      </Alert>
    );
    expect(getByRole('alert')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Checkbox renders and passes accessibility', async () => {
    const { container } = render(<Checkbox aria-label="Accept terms" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Switch renders and passes accessibility', async () => {
    const { container } = render(<Switch aria-label="Enable notifications" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
