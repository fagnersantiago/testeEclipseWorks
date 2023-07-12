import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

export default User;
