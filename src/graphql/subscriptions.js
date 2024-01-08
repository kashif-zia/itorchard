/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
export const onCreateQuotation = /* GraphQL */ `
  subscription OnCreateQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
  ) {
    onCreateQuotation(filter: $filter) {
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
export const onUpdateQuotation = /* GraphQL */ `
  subscription OnUpdateQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
  ) {
    onUpdateQuotation(filter: $filter) {
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
export const onDeleteQuotation = /* GraphQL */ `
  subscription OnDeleteQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
  ) {
    onDeleteQuotation(filter: $filter) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $ownerId: String
  ) {
    onCreateBlog(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $ownerId: String
  ) {
    onUpdateBlog(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $ownerId: String
  ) {
    onDeleteBlog(filter: $filter, ownerId: $ownerId) {
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
export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onCreateContactUs(filter: $filter) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onUpdateContactUs(filter: $filter) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onDeleteContactUs(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $ownerId: String
  ) {
    onCreateReview(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $ownerId: String
  ) {
    onUpdateReview(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $ownerId: String
  ) {
    onDeleteReview(filter: $filter, ownerId: $ownerId) {
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
export const onCreateIOCompany = /* GraphQL */ `
  subscription OnCreateIOCompany(
    $filter: ModelSubscriptionIOCompanyFilterInput
    $ownerId: String
  ) {
    onCreateIOCompany(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateIOCompany = /* GraphQL */ `
  subscription OnUpdateIOCompany(
    $filter: ModelSubscriptionIOCompanyFilterInput
    $ownerId: String
  ) {
    onUpdateIOCompany(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteIOCompany = /* GraphQL */ `
  subscription OnDeleteIOCompany(
    $filter: ModelSubscriptionIOCompanyFilterInput
    $ownerId: String
  ) {
    onDeleteIOCompany(filter: $filter, ownerId: $ownerId) {
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
