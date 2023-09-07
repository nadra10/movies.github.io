import {useState} from "react";
export default function Form ({moviesearch}) {
    
    const [formData, setFormData] = useState({
      searchterm: "",
    });
  
    
    const handleChange = (e) => {
    
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
  
    const handleSubmit = (e) => {
      
      e.preventDefault();
    
      moviesearch(formData.searchterm);
    };
  
   
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
