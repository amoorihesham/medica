import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
const formSchema = z.object({ phone: z.string().min(11).max(11), password: z.string().min(8) });

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
    mode: 'all',
  });

  const onSubmit = async (data: any) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='phone'
          render={(field) => (
            <FormItem className='mb-2'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Phone'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='bg-mainPrimaryColor text-white hover:bg-primaryLighter mt-3 '>Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
