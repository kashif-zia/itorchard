/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      company {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      email_verified
      status
      createdAt
      updatedAt
      userCompanyId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuotation = /* GraphQL */ `
  query GetQuotation($id: ID!) {
    getQuotation(id: $id) {
      id
      name
      email
      organization
      description
      file
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuotations = /* GraphQL */ `
  query ListQuotations(
    $filter: ModelQuotationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        organization
        description
        file
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      title
      description
      body
      slug
      thumbnail
      tags
      meta_title
      meta_description
      meta_keywords
      isPublished
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        body
        slug
        thumbnail
        tags
        meta_title
        meta_description
        meta_keywords
        isPublished
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const blogsBySlug = /* GraphQL */ `
  query BlogsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        body
        slug
        thumbnail
        tags
        meta_title
        meta_description
        meta_keywords
        isPublished
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBlogByUserId = /* GraphQL */ `
  query ListBlogByUserId(
    $ownerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogByUserId(
      ownerId: $ownerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        body
        slug
        thumbnail
        tags
        meta_title
        meta_description
        meta_keywords
        isPublished
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      first_name
      last_name
      email
      phone_number
      website_url
      description
      file
      category
      company_name
      skypeid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        phone_number
        website_url
        description
        file
        category
        company_name
        skypeid
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      company_name
      company_locaion
      offered_service
      start_date
      end_date
      project_cost
      project_description
      status
      is_approved
      review
      rating {
        quality_work
        cost
        response_time
        overall_experience
        __typename
      }
      review_description
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      IOCompany {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      iOCompanyReviewsId
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company_name
        company_locaion
        offered_service
        start_date
        end_date
        project_cost
        project_description
        status
        is_approved
        review
        rating {
          quality_work
          cost
          response_time
          overall_experience
          __typename
        }
        review_description
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        IOCompany {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        iOCompanyReviewsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIOCompany = /* GraphQL */ `
  query GetIOCompany($id: ID!) {
    getIOCompany(id: $id) {
      id
      company_name
      company_tagline
      website_url
      email
      phone_no
      no_of_employee
      founded
      description
      logo
      location
      headquarter_location
      is_verifeid
      is_sponsored
      total_earning
      hourly_rate
      project_earnings
      services {
        name
        percentage
        __typename
      }
      social_media {
        facebook
        instagram
        twitter
        linkedin
        other
        __typename
      }
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      reviews {
        items {
          id
          company_name
          company_locaion
          offered_service
          start_date
          end_date
          project_cost
          project_description
          status
          is_approved
          review
          rating {
            quality_work
            cost
            response_time
            overall_experience
            __typename
          }
          review_description
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          IOCompany {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          iOCompanyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      status
      updatedAt
      __typename
    }
  }
`;
export const listIOCompanies = /* GraphQL */ `
  query ListIOCompanies(
    $filter: ModelIOCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIOCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listActiveCompanies = /* GraphQL */ `
  query ListActiveCompanies(
    $status: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIOCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActiveCompanies(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
