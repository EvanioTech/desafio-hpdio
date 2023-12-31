interface ICard {
  email: string,
  password: number,
}

export const Card = ({ email, password }: ICard) => {
  return(
    <div>
      <h1>Crie sua conta</h1>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  )
}