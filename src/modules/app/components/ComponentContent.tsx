import { ComponentSection } from './ComponentSection';
import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  Label,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/';

export function ComponentContent() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-4">
        <ComponentSection title="Alert Dialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentSection>

        <ComponentSection title="Alert">
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
        </ComponentSection>

        <ComponentSection title="Avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentSection>

        <ComponentSection title="Badge">
          <Badge>Badge</Badge>
        </ComponentSection>

        <ComponentSection title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentSection>

        <ComponentSection title="Buttons">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentSection>

        <ComponentSection title="Card">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </ComponentSection>

        <ComponentSection title="Checkbox">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentSection>

        <ComponentSection title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </ComponentSection>

        <ComponentSection title="Dropdown Menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentSection>

        <ComponentSection title="Hover Card">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </ComponentSection>

        <ComponentSection title="Input">
          <Input type="text" placeholder="Type something..." />
        </ComponentSection>

        <ComponentSection title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </ComponentSection>

        <ComponentSection title="Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>This is the popover content.</p>
            </PopoverContent>
          </Popover>
        </ComponentSection>

        <ComponentSection title="Radio Group">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </ComponentSection>

        <ComponentSection title="Scroll Area">
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            Jokester began sneaking into the castle in the middle of the night and leaving jokes all
            over the place: under the king&apos;s pillow, in his soup, even in the royal toilet. The
            king was furious, but he couldn&apos;t seem to stop Jokester, no matter what he tried...
          </ScrollArea>
        </ComponentSection>

        <ComponentSection title="Select">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </ComponentSection>

        <ComponentSection title="Separator">
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </ComponentSection>

        <ComponentSection title="Sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ComponentSection>

        <ComponentSection title="Skeleton">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection title="Switch">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentSection>

        <ComponentSection title="Table">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ComponentSection>

        <ComponentSection title="Tabs">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </ComponentSection>

        <ComponentSection title="Textarea">
          <Textarea placeholder="Type your message here." />
        </ComponentSection>

        <ComponentSection title="Tooltip">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentSection>
      </div>
    </main>
  );
}
