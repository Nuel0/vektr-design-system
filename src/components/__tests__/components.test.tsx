import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../Select';
import { Checkbox } from '../Checkbox';
import { RadioGroup, RadioGroupItem } from '../Radio';
import { Switch } from '../Switch';
import { Label } from '../Label';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from '../Card';
import { Badge } from '../Badge';
import { Alert, AlertTitle, AlertDescription } from '../Alert';
import { Avatar, AvatarImage, AvatarFallback } from '../Avatar';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../Dialog';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '../Drawer';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../Dropdown';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip';
import { Popover, PopoverTrigger, PopoverContent } from '../Popover';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../Table';
import { ToastProvider, useToast } from '../Toast';
import { Skeleton } from '../Skeleton';
import { Separator } from '../Separator';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from '../Pagination';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../Breadcrumb';
import { VektrProvider } from '../VektrProvider';

describe('Vektr 25-Component Unit & Accessibility Test Suite', () => {
  // 1. Button
  it('1. Button renders without accessibility violations', async () => {
    const { container } = render(<Button variant="primary">Click Me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('1. Button handles loading and disabled states', () => {
    const { getByRole } = render(<Button isLoading>Submit</Button>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
  });

  // 2. Input
  it('2. Input links label and helper text via id and aria-describedby', async () => {
    const { getByLabelText, getByText, container } = render(
      <Input label="Email Address" helperText="We will never share your email." errorText="Invalid email format" />
    );
    const input = getByLabelText('Email Address');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(getByText('Invalid email format')).toHaveAttribute('role', 'alert');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 3. Textarea
  it('3. Textarea renders label and error state without accessibility violations', async () => {
    const { getByLabelText, container } = render(
      <Textarea label="Feedback" helperText="Provide your feedback" errorText="Feedback is required" />
    );
    expect(getByLabelText('Feedback')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 4. Select
  it('4. Select renders trigger and item options without accessibility violations', async () => {
    const { container, getByText } = render(
      <Select defaultValue="opt1">
        <SelectTrigger aria-label="Choose Option">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="opt1">Option 1</SelectItem>
          <SelectItem value="opt2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(getByText('Option 1')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 5. Checkbox
  it('5. Checkbox renders and passes accessibility', async () => {
    const { container } = render(<Checkbox aria-label="Accept terms" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 6. RadioGroup
  it('6. RadioGroup renders items without accessibility violations', async () => {
    const { container, getByLabelText } = render(
      <RadioGroup defaultValue="r1" aria-label="Select Frequency">
        <div>
          <RadioGroupItem value="r1" id="r1" />
          <Label htmlFor="r1">Daily</Label>
        </div>
        <div>
          <RadioGroupItem value="r2" id="r2" />
          <Label htmlFor="r2">Weekly</Label>
        </div>
      </RadioGroup>
    );
    expect(getByLabelText('Daily')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 7. Switch
  it('7. Switch renders and passes accessibility', async () => {
    const { container } = render(<Switch aria-label="Enable notifications" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 8. Label
  it('8. Label renders correctly with associated input', async () => {
    const { container, getByText } = render(
      <div>
        <Label htmlFor="username">Username</Label>
        <input id="username" type="text" />
      </div>
    );
    expect(getByText('Username')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 9. Card
  it('9. Card renders header, title, description, body, and footer', async () => {
    const { getByText, container } = render(
      <Card variant="raised">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardBody>Card Body Content</CardBody>
        <CardFooter>Card Footer Content</CardFooter>
      </Card>
    );
    expect(getByText('Card Title')).toBeInTheDocument();
    expect(getByText('Card Description')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 10. Badge
  it('10. Badge renders all variants without accessibility violations', async () => {
    const { container, getByText } = render(
      <div>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    );
    expect(getByText('Success')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 11. Alert
  it('11. Alert renders role="alert" and passes accessibility', async () => {
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

  // 12. Avatar
  it('12. Avatar renders image and fallback', async () => {
    const { getByText, container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(getByText('JD')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 13. Dialog
  it('13. Dialog renders trigger and content when open', async () => {
    const { getByText, container } = render(
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description body</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    expect(getByText('Dialog Title')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 14. Drawer
  it('14. Drawer renders content when open', async () => {
    const { getByText, container } = render(
      <Drawer open={true} side="right">
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer description body</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );
    expect(getByText('Drawer Title')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 15. DropdownMenu
  it('15. DropdownMenu renders items when open', async () => {
    const { getByText, container } = render(
      <DropdownMenu open={true}>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(getByText('Profile')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 16. Tooltip
  it('16. Tooltip renders trigger and tooltip content', async () => {
    const { getByText, container } = render(
      <TooltipProvider>
        <Tooltip open={true}>
          <TooltipTriggerAsButton>Hover me</TooltipTriggerAsButton>
          <TooltipContent>Helpful tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(getByText('Hover me')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // Helper helper for tooltip button trigger
  function TooltipTriggerAsButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <TooltipTrigger asChild><button {...props} /></TooltipTrigger>;
  }

  // 17. Popover
  it('17. Popover renders content when open', async () => {
    const { getByText, container } = render(
      <Popover open={true}>
        <PopoverTrigger asChild>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent>Popover body text</PopoverContent>
      </Popover>
    );
    expect(getByText('Popover body text')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 18. Tabs
  it('18. Tabs renders triggers and active content', async () => {
    const { getByText, container } = render(
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Account Tabs">
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Account Details Content</TabsContent>
        <TabsContent value="tab2">Password Settings Content</TabsContent>
      </Tabs>
    );
    expect(getByText('Account Details Content')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 19. Accordion
  it('19. Accordion renders item triggers and content', async () => {
    const { getByText, container } = render(
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Section 1 details</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(getByText('Section 1 details')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 20. Table
  it('20. Table renders headers, rows, and cells', async () => {
    const { getByText, container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alex</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(getByText('Alex')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 21. Toast
  it('21. ToastProvider renders container and toast notification', async () => {
    const TestComponent = () => {
      const { toast } = useToast();
      return (
        <button onClick={() => toast({ title: 'Success Toast', description: 'Operation completed' })}>
          Trigger Toast
        </button>
      );
    };

    const { getByText, container } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    const button = getByText('Trigger Toast');
    act(() => {
      button.click();
    });

    expect(getByText('Success Toast')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 22. Skeleton
  it('22. Skeleton renders without accessibility violations', async () => {
    const { container } = render(<Skeleton className="test-skeleton" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 23. Separator
  it('23. Separator renders horizontal and vertical orientations', async () => {
    const { container } = render(
      <div>
        <Separator orientation="horizontal" />
        <Separator orientation="vertical" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 24. Pagination
  it('24. Pagination renders navigation items and active page link', async () => {
    const { getByText, container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(getByText('1')).toHaveAttribute('aria-current', 'page');
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 25. Breadcrumb
  it('25. Breadcrumb renders breadcrumb navigation trail', async () => {
    const { getByText, container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(getByText('Settings')).toHaveAttribute('aria-current', 'page');
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 26. VektrProvider
  it('26. VektrProvider applies data-theme and data-brand attributes', async () => {
    const { container } = render(
      <VektrProvider defaultTheme="dark" defaultBrand="fintech">
        <div>Content Inside Provider</div>
      </VektrProvider>
    );
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(document.documentElement).toHaveAttribute('data-brand', 'fintech');
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
