import { atom } from "jotai";

type UserAtomValue = {
  name: string;
  token: string;
  userId: string;
};

const userAtom = atom(localStorage.getItem("poomasi_user") ?? "");

const userAtomWithPersistence = atom(
  get => {
    const data = get(userAtom);
    return data ? JSON.parse(data) : null;
  },
  (_, set, data: UserAtomValue | null) => {
    set(userAtom, JSON.stringify(data));
    localStorage.setItem("poomasi_user", JSON.stringify(data));
  },
);

export { userAtom, userAtomWithPersistence };
