import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/';
import { DesignSystem } from '@/modules/app/components/DesignSystem';
import UIComponents from '@/modules/app/components/UIComponents';

export function DesignSystemContainer() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Design System & UI Components</h1>

      <Tabs defaultValue="design-system" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="design-system">Design System</TabsTrigger>
          <TabsTrigger value="ui-components">UI Components</TabsTrigger>
        </TabsList>
        <TabsContent value="design-system">
          <DesignSystem />
        </TabsContent>
        <TabsContent value="ui-components">
          <UIComponents />
        </TabsContent>
      </Tabs>
    </div>
  );
}
