import Layout from "../components/layout";

const Home = () => {

  return (
    <Layout>
      <div class="container">
            <h1 style={{textAlign: "center", fontSize: "36px", color: "#333", marginBottom: "30px"}}>Welcome to the Book Hive</h1>
            <p style={{fontSize: "15px", marginBottom: "10px"}}>Greetings! I'm Mitil, the creator of the Book Hive. Embark on a journey through this digital library adventure.</p>
            <p style={{fontSize: "15px", marginBottom: "10px"}}>This library is built on the robust foundations of:</p>
            <ul>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>Node.js</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>Express.js</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>PostgreSQL</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>React</li>
            </ul>
            <p style={{fontSize: "15px", marginBottom: "10px"}}><b>Server Side:</b> I have used Json Web tokens for authentication, CORS for client server communication.Clear API structure usage and Controllers, Middlewares, Validators are used to keep the structure well maintained. <br/><b>Client Side:</b> I have used React and Redux slices to maintain the state for authentication. Well structured components and pages helps the client side for easy comprehension.<br/><b>Backend:</b> Postgres holds 3 tables, these already have 10 books and 3 users.</p>

            <ul >
                <li style={{marginBottom: "10px", color:" #6c5441"}}>Books</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>Users</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>User Ratings</li>
            </ul>
            <p style={{fontSize: "15px", marginBottom: "10px"}}>Dynamic access controls gracefully adapt to each users's role. Two roles included in this project are : </p>
            <ul>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>The Librarian</li>
                <li style={{marginBottom: "10px", color:" #6c5441"}}>The Student</li>
            </ul>
            <p style={{textAlign: "center",fontSize: "15px", marginBottom: "10px", color: "#A18167"}}>Please Login and Exprience this Project.</p>
        </div>
    </Layout>
  )
};


export default Home;