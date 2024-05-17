import { useAppDispatch, useAppSelector } from "store/hooks"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import {
  userSliceActions,
  userSliceSelectors,
} from "store/redux/users/usersSlice"
import Button from "components/Button/Button"
import { UserData } from "store/redux/users/types"


function Users() {
  const dispatch = useAppDispatch()

  const usersDB = useAppSelector(userSliceSelectors.users)

  const userDataMapped = usersDB.map((user: UserData) => {
    const removeUser = () => {
      dispatch(userSliceActions.deleteUser(user.id))
    }
    
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.firstlastName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
        <Button name='Remove' onButtonClick={removeUser}/>
      </UserCard>
    )
  })

  
  const deleteUserData = () => {
    dispatch(userSliceActions.deleteUserData())
  }




  return (
    <UsersPageWrapper>
      <>{userDataMapped}</>
      {!!usersDB && <Button name="Delete all users" onButtonClick={deleteUserData} />}      
    </UsersPageWrapper>
  )
}

export default Users
