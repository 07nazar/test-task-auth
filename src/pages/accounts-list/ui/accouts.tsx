import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { useEffect } from 'react'
import { fetchAllUsers } from 'src/entities/user/api/user-api'
import { UserInfoCard } from 'src/entities/user/ui/user-info-card'
import avatar from 'src/shared/images/empty-avatar.png'
import { Loader } from 'src/shared/ui/loader'

export const Accounts = () => {
  const dispatch = useAppDispatch()
  const { users } = useSliceSelector('user', state => state)

  useEffect(() => {
    void dispatch(fetchAllUsers())
  }, [dispatch])

  return !users ? (
    <Loader />
  ) : (
    users.map((item, index) => (
      <UserInfoCard
        name={item.name}
        avatar={item.image.url || avatar}
        email={item.email}
        key={item.slug}
        index={index}
      />
    ))
  )
}
