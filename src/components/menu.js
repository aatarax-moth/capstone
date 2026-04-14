import './menu.css';
import Container from './container.js';
import Button from './button.js';

function Menu() {
  return (
    <div className="menu">
      <Container>
        <h2>Menu</h2>
        <p>Our menu features a variety of dishes designed to cater to every palate, from comforting classics to innovative seasonal specials. Whether you’re stopping by for a quick lunch, a cozy dinner, or a relaxed weekend brunch, our warm and inviting atmosphere is the perfect backdrop for enjoying great food with friends and family. Come and experience the taste of Little Lemon, where every meal is crafted with love and care!</p>
        <Button text="View Menu"/>

        <div className="triple-grid">
            <div className="menu-item">
                <img src="/greek-salad.jpg" alt="Greek Salad"/>
                <div className="info">
                <h3>Greek Salad</h3>
                <p>A refreshing blend of crisp lettuce, ripe tomatoes, cucumbers, olives, and feta cheese, drizzled with our signature lemon-oregano dressing.</p>
                </div>
            </div>
            <div className="menu-item">
                <img src="/lemon-dessert.jpg" alt="Lemon Dessert"/>
                <div className="info">
                    <h3>Lemon Dessert</h3>
                    <p>A zesty and refreshing dessert featuring a tangy lemon curd layered with a light meringue topping.</p>
                </div>
            </div>
            <div className="menu-item">
                <img src="/rolls.jpg" alt="Rolls"/>
                <div className="info">
                    <h3>Rolls</h3>
                    <p>Deliciously crafted rolls filled with a variety of ingredients, perfect for a quick and satisfying meal.</p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Menu;