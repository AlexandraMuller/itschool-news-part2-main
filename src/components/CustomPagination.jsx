import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import "./CustomPagination.css";
function CustomPagination(props) {
  const { active, baseUrl } = props;
  let navigate = useNavigate();

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        className="pagination"
        key={number}
        active={number === active}
        onClick={() => {
          navigate(`${baseUrl}?page=${number}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination className="d-flex justify-content-center mt-5 ">
        {items}
      </Pagination>
    </div>
  );
}

export default CustomPagination;
