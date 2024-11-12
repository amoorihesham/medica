import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
const formSchema = z
  .object({
    name: z.string().min(4).max(20),
    mobile: z.string().min(11).max(11),
    password: z.string().min(8),
    password_confirmation: z.string(),
    governorate: z.string(),
    area: z.string(),
    pharmacy_name: z.string(),
    pharmacy_phone: z.string().min(11).max(11),
  })
  .required();

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      password: '',
      password_confirmation: '',
      governorate: '',
      area: '',
      pharmacy_name: '',
      pharmacy_phone: '',
    },
    mode: 'all',
  });

  const onSubmit = async (data: any) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='name'
          render={(field) => (
            <FormItem className='mb-2'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Full Name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='mobile'
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
            <FormItem className='mb-2'>
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
        <FormField
          control={form.control}
          name='password_confirmation'
          render={(field) => (
            <FormItem className='mb-2'>
              <FormControl>
                <Input
                  type='password'
                  placeholder='password confirmation'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='governorate'
          render={(field) => (
            <Select {...field}>
              <SelectTrigger className='mb-2'>
                <SelectValue placeholder='Government' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          control={form.control}
          name='area'
          render={(field) => (
            <Select {...field}>
              <SelectTrigger className='mb-2'>
                <SelectValue placeholder='Area' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          control={form.control}
          name='pharmacy_name'
          render={(field) => (
            <FormItem className='mb-2'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='pharmacy name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='pharmacy_phone'
          render={(field) => (
            <FormItem className='mb-2'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='pharmacy phone'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='bg-mainPrimaryColor text-white hover:bg-primaryLighter mt-3 '>Register</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
