import { type HTMLAttributes } from "react";

export const Card = (props: HTMLAttributes<HTMLDivElement>) => {
	return <section className="card" {...props} />;
};

export const Wrapper = (props: HTMLAttributes<HTMLDivElement>) => {
	return <div className="card-wrapper" {...props} />;
};

const Header = (props: HTMLAttributes<HTMLDivElement>) => {
	return <header className="card-header" {...props} />;
};

const Body = (props: HTMLAttributes<HTMLDivElement>) => {
	return <div className="card-body text-sm " {...props} />;
};

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
	return <footer className="card-footer" {...props} />;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Wrapper = Wrapper;
