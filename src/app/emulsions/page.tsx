import EmulsionForm from '@/components/Forms/Emulsions';
import EmulsionsList from '@/components/Molecules/EmulsionsList'

const Emulsions = async () => {
  return (
    <>
      <EmulsionsList />
      <EmulsionForm />
    </>
  )
}

export default Emulsions