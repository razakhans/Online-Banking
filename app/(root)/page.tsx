import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalaneBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });
  

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalaneBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData}
          //transactions={account?.transactions}
      
          transactions={[
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "wed, Apr 24,2:00 AM",
              image: "",
              $createdAt: "34/34/2222",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "wed, Apr 24,2:00 AM",
              image: "",
              $createdAt: "34/34/2222",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "wed, Apr 24,2:00 AM",
              image: "",
              $createdAt: "34/34/2222",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "wed, Apr 24,2:00 AM",
              image: "",
              $createdAt: "34/34/2222",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "Tue, Apr 24,2:00 AM",
              image: "",
              $createdAt: "wed, Apr 24,2:00 AM",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "Mon, Apr 24,2:00 AM",
              image: "",
              $createdAt: "wed, Apr 24,2:00 AM",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
            {
              id: "1234",
              $id: "342342fw",
              name: "Raza Khan",
              paymentChannel: "sdfs",
              type: "sdf",
              accountId: "grefer",
              amount: 34,
              pending: true,
              category: "debit",
              date: "wed, Apr 24,2:00 AM",
              image: "",
              $createdAt: "34/34/2222",
              channel: "dfsd",
              senderBankId: "sdfsdf",
              receiverBankId: "fgdfgdf",
            },
          ]}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
