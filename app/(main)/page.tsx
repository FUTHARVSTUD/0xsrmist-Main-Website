/**
 * Home Page
 */

// Dependencies
import React from 'react';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import About from '@/components/home/About';
import Domains from '@/components/home/Domains';
import Recruitment from '@/components/resuable/Recruitment';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import {
	domainsQuery,
	latestEventsQuery,
	latestRecruitmentEventQuery,
	partnersQuery,
} from '@/sanity/lib/queries';

import './styles.css';
import Events from '@/components/home/Events';

const Home = async () => {
	const domains = await sanityFetch<Domain[]>({ query: domainsQuery });
	const partners = await sanityFetch<Partner[]>({ query: partnersQuery });
	const events = await sanityFetch<EventData[]>({ query: latestEventsQuery });
	const recruitment = await sanityFetch<EventData>({
		query: latestRecruitmentEventQuery,
	});

	return (
		<main>
			<Hero />
			<Partners partners={partners} />
			<About />
			<Domains domains={domains} />
			{events.length > 0 ? <Events events={events} /> : null}
			{recruitment ? <Recruitment recruitment={recruitment} /> : null}
		</main>
	);
};

export default Home;
