export const Card = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-content">{children}</div>;
};

const Header = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-header">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-body text-sm ">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-footer">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
