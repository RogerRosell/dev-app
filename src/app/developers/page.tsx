import DeveloperForm from '@/components/Forms/Developers';
import DevelopersList from '@/components/Molecules/DevelopersList'

const page = async () => {
  return (
    <>
      <DevelopersList />
      <DeveloperForm />
    </>
  )
}

export default page